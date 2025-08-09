import { ReactNode } from "react"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

interface Column<T> {
  header: ReactNode
  accessor: keyof T
  cell?: (value: T[keyof T], row: T) => ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  emptyState?: ReactNode
}

export function DataTable<T>({ columns, data, emptyState }: DataTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col, i) => (
            <TableHead key={i}>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length === 0 && (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center">
              {emptyState ?? <p className="text-muted-foreground">No results.</p>}
            </TableCell>
          </TableRow>
        )}
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="hover:bg-muted/50">
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>
                {col.cell ? col.cell(row[col.accessor], row) : (row[col.accessor] as ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
