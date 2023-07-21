import React from "react";

export interface IconProps {
    Icon: React.ComponentType<React.ComponentProps<'svg'>>;
    active?: boolean;
}