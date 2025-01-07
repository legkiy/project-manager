import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material';
import { Column, Task } from '../model';
import { AddRounded, RemoveCircleRounded } from '@mui/icons-material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Text } from '@/shared/ui';

interface Props {
  onDelete: (id: string) => void;
  column: Column;
  creteTask: (columnId: string) => void;
  tasks: Task[];
}

const ColumnContainer = ({ column, onDelete, creteTask, tasks }: Props) => {
  const { isDragging, attributes, setNodeRef, listeners, transition, transform } = useSortable({
    id: column.id,
    data: {
      type: 'column',
      item: column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

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
          cursor: 'grab',
          justifyItems: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">{column.name}</Typography>
        <IconButton onClick={() => onDelete(column.id)}>
          <RemoveCircleRounded />
        </IconButton>
      </Stack>
      <Box
        sx={{
          // height: '100%',
          overflowY: 'auto',
        }}
      >
        <Stack
          gap={2}
          sx={{
            p: 1,
            pb: 2,
          }}
        >
          {tasks.map((task) => (
            <Card key={task.id}>
              <Typography variant="subtitle1">{task.name}</Typography>
            </Card>
          ))}
        </Stack>
      </Box>
      <Box textAlign="center">
        <Button
          startIcon={<AddRounded />}
          onClick={() => creteTask(column.id)}
          sx={{
            minWidth: 100,
          }}
        >
          <Text mess="Add" />
        </Button>
      </Box>
    </Stack>
  );
};
export default ColumnContainer;
