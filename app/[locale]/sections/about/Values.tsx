'use client';

import { H4 } from '@/components/ui/typography-h4';
import { P } from '@/components/ui/typography-p';
import React from 'react';

interface ValuesProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Values({ title, description, icon }: ValuesProps) {
  return (
    <div
      className="flex flex-col p-5 lg:w-1/3 gap-5 bg-white dark:bg-slate-800 rounded-2xl"
      data-aos="fade-up">
      <div className="flex flex-row items-center justify-between">
        <H4>{title}</H4>
        {icon}
      </div>
      <P>{description}</P>
    </div>
  );
}

export default Values;
