import React from 'react';

const SectionLayout = ({ children, id }) => {
  return (
    <section id={id} className="section align-items-center">
      {children}
    </section>
  );
};

export default SectionLayout;
