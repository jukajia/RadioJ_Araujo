import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    touchAction: 'none', // Prevents scrolling on touch devices when dragging
  };
  
  return (
    <div ref={setNodeRef} style={style} className="relative">
      <button 
        {...attributes} 
        {...listeners} 
        className="absolute top-2 right-10 z-10 p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
        aria-label="Mover seção"
      >
        <GripVertical size={20} />
      </button>
      {props.children}
    </div>
  );
}