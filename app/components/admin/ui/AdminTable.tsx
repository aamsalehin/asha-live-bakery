"use client";

import React from "react";

type Align = "left" | "center" | "right";

export type AdminTableColumn<T> = {
  key: string;
  header: React.ReactNode;
  align?: Align;
  className?: string;
  headerClassName?: string;
  render: (row: T) => React.ReactNode;
};

type Props<T> = {
  columns: AdminTableColumn<T>[];
  rows: T[];
  emptyText?: string;
  rowKey?: (row: T, index: number) => string | number;
};

export default function AdminTable<T>({
  columns,
  rows,
  emptyText = "No data found",
  rowKey,
}: Props<T>) {
  const alignClass = (align: Align = "left") =>
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div
      className="
        overflow-x-auto rounded-md
        bg-[var(--admin-card-bg)]
        
      "
    >
      <table className="w-full text-sm">
        <thead>
          <tr
            className="
              border-b border-[var(--admin-card-border)]
              bg-[var(--admin-soft-bg)]
            "
          >
            {columns.map((col) => (
              <th
                key={col.key}
                className={`
                  ${alignClass(col.align)}
                  px-3 py-3
                  font-semibold
                  text-[var(--admin-text)]
                  ${col.headerClassName || ""}
                `}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={rowKey ? rowKey(row, index) : index}
              className="
                border-b border-[var(--admin-card-border)]
                hover:bg-[var(--admin-bg)]/40
                transition
              "
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`
                    ${alignClass(col.align)}
                    px-3 py-2
                    text-[var(--admin-text)]
                    ${col.className || ""}
                  `}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-3 py-10 text-center text-[var(--admin-muted)]"
              >
                {emptyText}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
