
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  feedbacks: number;
  likes: number;
  views: number;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, isSelected, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className={`border-border/50 hover:border-primary/50 transition-all cursor-pointer p-4 ${
        isSelected ? 'border-primary border-2' : 'bg-card/50 backdrop-blur-sm'
      }`}
      onClick={onClick}
    >
      <Badge className="mb-2">{project.category}</Badge>
      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">{project.description}</p>
      <p className="text-xs text-foreground/50 mb-3">por <span className="text-primary">{project.author}</span></p>
      
      <div className="flex items-center justify-between text-foreground/70 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            <span>{project.feedbacks}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" />
            <span>{project.likes}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          <span>{project.views}</span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
