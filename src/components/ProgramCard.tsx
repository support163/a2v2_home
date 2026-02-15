import { Star, Users } from "lucide-react";
import { Avatar } from "./ui/Avatar";
import { Badge } from "./ui/Badge";

interface ProgramCardProps {
  image: string;
  tag: string;
  tagVariant: "purple" | "blue" | "green" | "amber";
  title: string;
  description: string;
  instructorName: string;
  instructorAvatar?: string;
  sessions: number;
  rating: number;
}

export function ProgramCard({
  image,
  tag,
  tagVariant,
  title,
  description,
  instructorName,
  instructorAvatar,
  sessions,
  rating,
}: ProgramCardProps) {
  return (
    <article className="bg-white rounded-12 border border-grey-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge label={tag} variant={tagVariant} />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-grey-900 leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-grey-500 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-3">
          <Avatar src={instructorAvatar} alt={instructorName} size="sm" />
          <span className="text-sm font-medium text-grey-700">
            {instructorName}
          </span>
        </div>

        {/* Meta */}
        <div className="mt-4 pt-4 border-t border-grey-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-grey-500">
            <Users size={16} />
            <span className="text-sm">{sessions} Sessions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-grey-700">{rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
