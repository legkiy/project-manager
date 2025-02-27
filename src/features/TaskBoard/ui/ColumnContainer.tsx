import { Box, Stack, Typography } from '@mui/material';
import { DnDItemType } from '../model';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TaskDnDCard from './TaskDnDCard';
import { useMemo } from 'react';
import { Task } from '@/entities/Task';
import { UniqEntity } from '@/shared/models';

interface Props {
  column: UniqEntity;
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

const ColumnContainer = ({ column, tasks, onDeleteTask }: Props) => {
  const { isDragging, attributes, setNodeRef, listeners, transition, transform } = useSortable({
    id: column.id,
    data: {
      type: DnDItemType.Column,
      item: column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  return (
    <Stack
      ref={setNodeRef}
      gap={1}
      sx={{
        bgcolor: 'background.paper',
        width: 350,
        minWidth: 350,
        height: '100%',
        ...style,
        opacity: isDragging ? 0.3 : 1,
      }}
    >
      <Stack
        {...attributes}
        {...listeners}
        direction="row"
        sx={{
          cursor: isDragging ? 'grabbing' : 'grab',
          justifyItems: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1,
        }}
      >
        <Typography variant="h6">{column.name}</Typography>
      </Stack>
      <Box
        sx={{
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Stack
          gap={2}
          sx={{
            px: 2,
            pb: 2,
          }}
        >
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskDnDCard key={task.id} task={task} onDelete={onDeleteTask} />
            ))}
          </SortableContext>
        </Stack>
      </Box>
    </Stack>
  );
};
export default ColumnContainer;
