'use client';

// @project
import { Abilities } from '@/blocks/abilities';
import { Experiences } from '@/blocks/experiences';
import { Projects } from '@/blocks/projects';
import { Skills } from '@/blocks/skills';
import { Summary } from '@/blocks/summary';
// import { Testimonial10 } from '@/blocks/testimonial';
// import { Pricing9 } from '@/blocks/pricing';
import useDataThemeMode from '@/hooks/useDataThemeMode';


// @data
import {
  abilities,
  experiences,
  projects,
  skills,
  summary
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  useDataThemeMode();

  return (
    <>
      <Summary {...summary} />
      <section id='skills'><Skills {...skills} /></section>
      <section id='abilities'><Abilities {...abilities} /></section>
      <section id='projects'><Projects {...projects} /></section>
      <section id='experiences'><Experiences {...experiences} /></section>

      {/* this is the references section, comment out for now */}
      {/* <section id='references'><Testimonial10 {...testimonial} /></section> */}  

      {/* this is the prices section, the style might still be usefullcomment out for now */}
      {/* <section id='prices'><Pricing9 {...pricing} /></section> */}

    </>
  );
}
