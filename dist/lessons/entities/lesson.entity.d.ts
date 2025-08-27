import { Section } from 'src/sections/entities/section.entity';
import { Progress } from 'src/progress/entities/progress.entity';
export declare class Lesson {
    id: string;
    sectionId: string;
    section: Section;
    title: string;
    content: string;
    video_url: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    progresses: Progress[];
}
