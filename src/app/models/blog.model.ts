export interface BlogPost {
    id: number;
    title: string;
    subject: string;
    topic: string;
    estimatedTimeInMinutes: number;
    content: string;
    codeSnippet: string;
    youTubeLink: string;
    usefulLinks: string[];
    tags: string[];
    createdAt: string;
  }
  