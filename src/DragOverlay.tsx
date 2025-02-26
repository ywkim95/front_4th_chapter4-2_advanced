import { Box } from "@chakra-ui/react";
import { useDndContext } from "@dnd-kit/core";
import { memo, useCallback, useMemo } from "react";

interface Props {
  tableId: string;
  children: React.ReactNode;
}

const DragOverlay = memo(({ tableId, children }: Props) => {
  const dndContext = useDndContext();

  const getActiveTableId = useCallback(() => {
    const activeId = dndContext.active?.id;
    if (activeId) {
      return String(activeId).split(":")[0];
    }
    return null;
  }, [dndContext.active]);

  const activeTableId = useMemo(() => getActiveTableId(), [getActiveTableId]);

  return (
    <Box
      position="relative"
      outline={activeTableId === tableId ? "5px dashed" : undefined}
      outlineColor="blue.300"
    >
      {children}
    </Box>
  );
});

export default DragOverlay;
