"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code,
  Briefcase as SocialBriefcase,
  Mail,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

// Types
interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

interface ExperiencePosition {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  skills?: string[];
  isExpanded?: boolean;
}

interface Experience {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

// Utility Components
const AnimatedContainer = ({
  className,
  delay = 0.1,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Skill = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-red-600/30 bg-red-950/20 px-1.5 py-0.5 font-mono text-xs text-red-400",
        className
      )}
      {...props}
    />
  );
};

const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("disabled:opacity-100 hover:bg-red-600/10", className)}
      onClick={handleCopy}
      disabled={copied}
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <Check className="size-3.5 stroke-emerald-500" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Copy className="size-3.5" />
      </div>
    </Button>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-background via-red-950/5 to-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            width: '100vw',
            height: '100vh',
            transform: 'scale(1.5)',
            opacity: 0.3,
          }}
          src="https://www.youtube.com/embed/HcRClxi1778?autoplay=1&mute=1&loop=1&playlist=HcRClxi1778&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
          title="Spider-Man Background"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated web pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(185, 28, 28, 0.1) 0%, transparent 35%)
          `,
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(220, 38, 38, 0.03) 35px, rgba(220, 38, 38, 0.03) 70px)`,
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent drop-shadow-2xl">
              HARSH ROHRA
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">
              Full Stack Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Swinging through code, building web experiences that stick 🕸️
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <a
              href="https://github.com/HarshRohra14"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-600 transition-all shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/60 hover:scale-105 active:scale-95"
            >
              <Code className="size-5" />
              <span>GitHub</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-rohra-684420279/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-8 py-4 border-2 border-red-600/50 text-foreground font-bold rounded-lg hover:bg-red-600/10 hover:border-red-500 transition-all hover:scale-105 active:scale-95"
            >
              <Briefcase className="size-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:harshrohra24@gmail.com"
              className="group relative flex items-center gap-2 px-8 py-4 border-2 border-red-600/50 text-foreground font-bold rounded-lg hover:bg-red-600/10 hover:border-red-500 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="size-5" />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background -z-10" />
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <AnimatedContainer className="flex flex-col gap-4">
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl tracking-tight">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Featured</span> Projects
            </h2>
            <p className="max-w-lg text-muted-foreground font-medium">
              Check out my recent missions 🎯
            </p>
          </AnimatedContainer>
          <AnimatedContainer delay={0.2} className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="border-red-600/50 hover:bg-red-600/10 hover:border-red-500 disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="border-red-600/50 hover:bg-red-600/10 hover:border-red-500 disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </AnimatedContainer>
        </div>
      </div>

      <AnimatedContainer delay={0.3} className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={project.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] border-2 border-red-600/20 shadow-lg shadow-red-500/10 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/20 transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/90 via-red-950/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-bold md:mb-3 md:pt-4 lg:pt-4 tracking-tight">
                        {project.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-gray-200">
                        {project.description}
                      </div>
                      <div className="flex items-center text-sm font-bold text-red-400 group-hover:text-red-300 transition-colors">
                        View Project{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-red-600" : "w-2 bg-red-600/20 hover:bg-red-600/40"
                }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
};

// Experience Section
const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background -z-10" />
      <div className="container mx-auto max-w-4xl">
        <AnimatedContainer>
          <h2 className="text-3xl font-black md:text-4xl lg:text-5xl mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Work</span> Experience
          </h2>
        </AnimatedContainer>

        <div className="bg-background/80 backdrop-blur-sm rounded-lg border-2 border-red-600/20 shadow-lg shadow-red-500/10">
          {experiences.map((experience, index) => (
            <AnimatedContainer key={experience.id} delay={index * 0.1 + 0.2}>
              <div className="space-y-4 py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center">
                    {experience.companyLogo ? (
                      <img
                        src={experience.companyLogo}
                      alt={experience.companyName}
                      className="rounded-full size-6"
                    />
                  ) : (
                    <span className="flex size-2 rounded-full bg-red-600" />
                  )}
                </div>

                <h3 className="text-lg leading-snug font-bold">
                  {experience.companyName}
                </h3>

                {experience.isCurrentEmployer && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-red-600 opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-red-600" />
                  </span>
                )}
              </div>

              <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-red-600/20">
                {experience.positions.map((position) => (
                  <Collapsible key={position.id} defaultOpen={position.isExpanded}>
                    <div className="relative">
                      <CollapsibleTrigger className="group/experience block w-full text-left select-none">
                        <div className="relative z-1 mb-1 flex items-center gap-3 bg-background">
                          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-red-950/30 text-red-500 border border-red-600/30">
                            <Briefcase className="size-4" />
                          </div>

                          <h4 className="flex-1 text-base font-bold">
                            {position.title}
                          </h4>

                          <div className="shrink-0 text-red-600 [&_svg]:size-4">
                            <ChevronUp className="hidden group-data-[state=open]/experience:block" />
                            <ChevronDown className="hidden group-data-[state=closed]/experience:block" />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground font-medium">
                          {position.employmentType && (
                            <>
                              <span>{position.employmentType}</span>
                              <Separator className="h-4 bg-red-600/30" orientation="vertical" />
                            </>
                          )}
                          <span>{position.employmentPeriod}</span>
                        </div>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        {position.description && (
                          <div className="pt-2 pl-9 text-sm text-muted-foreground">
                            {position.description}
                          </div>
                        )}

                        {position.skills && position.skills.length > 0 && (
                          <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
                            {position.skills.map((skill, index) => (
                              <li key={index}>
                                <Skill>{skill}</Skill>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </div>
            </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const email = "harshrohra24@gmail.com";
  const phone = "+91 74149 15290";

  const socialLinks: SocialLink[] = [
    { icon: Code, href: "https://github.com/HarshRohra14", label: "GitHub" },
    { icon: SocialBriefcase, href: "https://www.linkedin.com/in/harsh-rohra-684420279/", label: "LinkedIn" },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background -z-10" />
      <div className="container mx-auto max-w-6xl">
        <AnimatedContainer>
          <div className="border-2 border-red-600/20 rounded-lg overflow-hidden shadow-lg shadow-red-500/10 bg-background/80 backdrop-blur-sm">
          <div className="px-6 py-12">
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Get In</span> Touch
            </h2>
            <p className="text-muted-foreground mb-8 font-medium">
              Let's team up and build something amazing 🚀
            </p>
          </div>

          <div className="border-t border-red-600/20" />

          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-between border-b md:border-r md:border-b-0 border-red-600/20">
              <div className="bg-red-950/10 flex items-center gap-3 border-b border-red-600/20 p-4">
                <Mail className="text-red-600 size-5" strokeWidth={1.5} />
                <h3 className="text-lg font-bold">Email</h3>
              </div>

              <div className="flex items-center gap-2 p-4 py-12">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-base font-medium hover:underline hover:text-red-500 transition-colors"
                >
                  {email}
                </a>
                <CopyButton text={email} className="size-6" />
              </div>

              <div className="border-t border-red-600/20 p-4">
                <p className="text-muted-foreground text-sm">
                  I respond to all emails within 24 hours
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-red-950/10 flex items-center gap-3 border-b border-red-600/20 p-4">
                <Phone className="text-red-600 size-5" strokeWidth={1.5} />
                <h3 className="text-lg font-bold">Phone</h3>
              </div>

              <div className="flex items-center gap-2 p-4 py-12">
                <a
                  href={`tel:${phone}`}
                  className="font-mono text-base font-medium hover:underline hover:text-red-500 transition-colors"
                >
                  {phone}
                </a>
                <CopyButton text={phone} className="size-6" />
              </div>

              <div className="border-t border-red-600/20 p-4">
                <p className="text-muted-foreground text-sm">
                  Available Mon-Fri, 9am-5pm EST
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-600/20" />

          <div className="relative flex min-h-[320px] items-center justify-center p-8 bg-gradient-to-br from-red-950/10 to-transparent">
            <div className="space-y-6">
              <h3 className="text-center text-2xl font-black tracking-tight">Find me online</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-950/20 hover:bg-red-600/20 flex items-center gap-x-2 rounded-full border-2 border-red-600/30 hover:border-red-500 px-6 py-3 transition-all hover:scale-105 active:scale-95"
                  >
                    <link.icon className="size-4" />
                    <span className="font-mono text-sm font-bold">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t-2 border-red-600/20 bg-gradient-to-b from-red-950/10 to-background px-6 py-12 lg:py-16">
      <div className="bg-red-600 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <p className="text-2xl font-black tracking-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Portfolio</p>
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <AnimatedContainer delay={0.2}>
            <div>
              <h3 className="text-xs font-bold mb-4 text-red-600">Quick Links</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#projects" className="hover:text-red-500 transition-colors font-medium">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-red-500 transition-colors font-medium">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-red-500 transition-colors font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3}>
            <div>
              <h3 className="text-xs font-bold mb-4 text-red-600">Connect</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/HarshRohra14"
                    className="hover:text-red-500 inline-flex items-center transition-colors font-medium"
                  >
                    <Code className="me-1 size-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/harsh-rohra-684420279/"
                    className="hover:text-red-500 inline-flex items-center transition-colors font-medium"
                  >
                    <SocialBriefcase className="me-1 size-4" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "TOMOBOARD",
      description:
        "TOMOBOARD is an interactive whiteboard that is intended to facilitate online classes and meetings in real-time. The product is intended to allow seamless collaborations among users as they share ideas in an online space.",
      href: "https://my-board-theta.vercel.app/sign-in",
      image:
        "https://imgs.search.brave.com/tS0ENmbBZG7buVnXyXPcySJ7UdZ0nlGgYLpPMe_tjns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDQ0/MzE2MC9wZXhlbHMt/cGhvdG8tNDQ0MzE2/MC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    },
    {
      id: "2",
      title: "NEXUS",
      description:
        "NEXUS is an AI-based research tool intended to assist students and scientists in their research endeavors. The product is intended to facilitate faster discoveries by providing intelligent insights to researchers.",
      href: "https://nexus-research-lh57bc1ek-harshs-projects-805d4737.vercel.app/",
      image:
        "https://imgs.search.brave.com/hmwybxaroodQ75r5_DYjwEU7KoQw-YelczEl-eSZ5T8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtZ2lybC1vbi1k/ZXNrLXN0dWR5LWFl/c3RoZXRpYy1sc2to/cnhyaHZkbmd0dWxw/LmpwZw",
    },
    {
      id: "3",
      title: "WakeUp GenZ",
      description:
        "WakeUp GenZ is an AI and machine learning-based product intended to assist in detecting fake news among other things. The product is intended to assist in creating awareness among users regarding the consumption of information",
      href: "https://github.com/HarshRohra14/WakeUp-GenZ",
      image:
        "https://imgs.search.brave.com/Ho6IdVfTPll-AwTLibXb8JmB3BT56kfK0rOCd8zYFT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/MTMwNjAyOC92ZWN0/b3IvZmFrZS1uZXdz/LWNvbmNlcHQtYW50/aHJvcG9tb3JwaGlj/LXNtYXJ0cGhvbmUt/Y2hhcmFjdGVyLXNo/b3dpbmctbmV3cy1v/bi1pdHMtc2NyZWVu/LWdyb3VwLW9mLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Q/cmdTb2o5ckZERUpl/U2pkTnVzWVRGQUhK/SnlLZDVDQzFzN0lW/a2xOWFQ0PQ",
    },
  ];

  const experiences: Experience[] = [
    {
      id: "1",
      companyName: "Seoulix Technologies",
      positions: [
        {
          id: "1-1",
          title: "Full Stack Developer Intern",
          employmentPeriod: "Jan 2026 — Feb 2026",
          employmentType: "Internship",
          description:
            "Worked as a full stack developer intern contributing to diverse web applications and backend services.",
          skills: [
            "Next.js",
            "Express",
            "Node.js",
            "PostgreSQL",
            "AWS",
          ],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle web pattern overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>
      <HeroSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
