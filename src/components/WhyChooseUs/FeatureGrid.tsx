"use client";

import type { ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import {
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDesc,
  AnimatedGridItem,
  FeatureGridRoot,
} from "./styled";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <FeatureGridRoot ref={ref}>
      {features.map(({ icon, title, description }, index) => (
        <AnimatedGridItem key={title} visible={isVisible} index={index}>
          <FeatureCard elevation={0}>
            <IconWrapper className="icon-wrapper">{icon}</IconWrapper>
            <FeatureTitle variant="h6">{title}</FeatureTitle>
            <FeatureDesc variant="body2">{description}</FeatureDesc>
          </FeatureCard>
        </AnimatedGridItem>
      ))}
    </FeatureGridRoot>
  );
};
