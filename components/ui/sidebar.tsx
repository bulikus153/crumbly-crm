"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSidebar } from "@/components/sidebar-provider";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";

const sidebarWidth = "180px";
const sidebarWidthIcon = "64px";

const SIDEBAR_VARIABLES = {
  "--sidebar-width": sidebarWidth,
  "--sidebar-width-icon": sidebarWidthIcon,
} as React.CSSProperties;

const SidebarContext = React.createContext<{ collapsed?: boolean }>({});

function Sidebar({
  children,
  className,
  collapsible = "full",
  defaultOpen = true,
  ...props
}: React.PropsWithChildren<{
  className?: string;
  collapsible?: "full" | "icon" | "offcanvas";
  defaultOpen?: boolean;
}>) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const [open, setOpen] = React.useState(defaultOpen);

  const collapsed =
    collapsible === "icon"
      ? !open
      : collapsible === "offcanvas"
      ? false
      : false;

  React.useEffect(() => {
    if (collapsible === "offcanvas") {
      setIsSidebarOpen(false);
    }
  }, [collapsible, setIsSidebarOpen]);

  if (collapsible === "offcanvas" && !isDesktop) {
    return (
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent
          side="left"
          className="!max-w-[180px] !p-0"
          style={SIDEBAR_VARIABLES}
        >
          <SidebarContext.Provider value={{ collapsed }}>
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
          </SidebarContext.Provider>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "group flex flex-col data-[collapsible=offcanvas]:hidden",
        className
      )}
      data-collapsible={collapsible}
      style={SIDEBAR_VARIABLES}
      {...props}
    >
      <div
        className={cn(
          "duration-200 relative h-svh transition-[width] ease-linear",
          "group-data-[state=expanded]:w-[--sidebar-width]",
          "group-data-[state=collapsed]:w-[--sidebar-width-icon]",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180"
        )}
      />

      <SidebarContext.Provider value={{ collapsed }}>
        <TooltipProvider delayDuration={0}>
          <CollapsibleContent className="flex flex-1 flex-col border-r border-border/50 bg-background">
            {children}
          </CollapsibleContent>
        </TooltipProvider>
      </SidebarContext.Provider>
    </Collapsible>
  );
}

function SidebarTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CollapsibleTrigger>) {
  return <CollapsibleTrigger className={cn("w-full", className)} {...props} />;
}

function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)} {...props} />
  );
}

function SidebarMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-1 flex-col gap-4 p-2", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex", className)} {...props} />;
}

function SidebarMenuButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-1 flex-col gap-1", className)} {...props} />
  );
}

function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

function SidebarGroupContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid grid-flow-row auto-rows-max", className)}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarContext,
};
