import React, { ReactNode, forwardRef } from 'react';

// Typage explicite des props qui inclut les attributs HTML natifs
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

// Utilisation de forwardRef pour permettre au composant d'accepter une ref
const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, ...rest }, ref) => {
    return (
        <section className={className} ref={ref} {...rest}>
            {children}
        </section>
    );
});

// Ajout d'un nom explicite au composant pour plus de clarté dans les devtools
Section.displayName = "Section";

export default Section;

