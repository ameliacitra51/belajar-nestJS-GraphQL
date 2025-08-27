import { ProgressService } from './progress.service';
import { Progress } from './entities/progress.entity';
import { CreateProgressInput } from './dto/create-progress.input';
import { UpdateProgressInput } from './dto/update-progress.input';
export declare class ProgressResolver {
    private readonly progressService;
    constructor(progressService: ProgressService);
    createProgress(createProgressInput: CreateProgressInput): Promise<Progress>;
    findAll(): Promise<Progress[]>;
    findOne(id: string): Promise<Progress>;
    updateProgress(updateProgressInput: UpdateProgressInput): Promise<Progress>;
    removeProgress(id: string): Promise<Progress>;
}
