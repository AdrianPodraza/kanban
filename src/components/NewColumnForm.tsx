import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/useDataContext";

type Column = {
  name: string;
};

type NewColumnFormProps = {
  handleCloseModal: () => void;
  columns: Column[];
  boardName: string;
};

function NewColumnForm({
  handleCloseModal,
  columns,
  boardName,
}: NewColumnFormProps) {
  const { addColumn, updateBoardName, updateColumnName } = useAppContext();
  const [columnNames, setColumnNames] = useState(
    columns.map((column) => column.name),
  );
  const [boardNameState, setBoardNameState] = useState(boardName);

  useEffect(() => {
    setColumnNames(columns.map((column) => column.name));
  }, [columns]);

  const handleColumnChange = (index: number, newName: string) => {
    const updatedColumnNames = [...columnNames];
    updatedColumnNames[index] = newName;
    setColumnNames(updatedColumnNames);
  };

  const handleAddColumn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addColumn(boardName);
    setColumnNames((prev) => [...prev, ""]);
  };

  const handleRemoveColumn = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    e.preventDefault();
    const updatedColumnNames = columnNames.filter((_, i) => i !== index);
    setColumnNames(updatedColumnNames);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Zaktualizuj nazwę tablicy
    updateBoardName(boardName, boardNameState);

    // Zaktualizuj nazwy kolumn
    columnNames.forEach((name, index) => {
      if (name !== columns[index]?.name) {
        updateColumnName(boardName, columns[index].name, name);
      }
    });

    // Usuń kolumny, które zostały usunięte z lokalnego stanu
    const removedColumns = columns.filter(
      (_, index) => !columnNames.includes(columns[index].name),
    );
    removedColumns.forEach((column) => {
      updateColumnName(boardName, column.name, "");
    });

    handleCloseModal();
  };

  return (
    <div
      className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-20"
      onClick={handleCloseModal}
    >
      <form
        className="flex w-[480px] flex-col gap-4 rounded-lg bg-white px-6 py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold">Edit Board</h3>

        <label
          className="text-xs font-bold text-grey-medium"
          htmlFor="boardName"
        >
          Board Name
        </label>
        <input
          id="boardName"
          value={boardNameState}
          type="text"
          className="rounded-lg border-[1px] border-[#828FA3] border-opacity-25 px-2 py-2 focus:outline-none"
          placeholder="e.g. Web Design"
          onChange={(e) => setBoardNameState(e.target.value)}
        />

        <label
          className="text-xs font-bold text-grey-medium"
          htmlFor="columnName"
        >
          Columns
        </label>
        <div className="flex flex-col gap-7">
          {columnNames.map((name, index) => (
            <div className="flex items-center gap-7" key={index}>
              <input
                id={`columnName-${index}`}
                value={name}
                type="text"
                onChange={(e) => handleColumnChange(index, e.target.value)}
                className="w-full rounded-lg border-[1px] border-[#828FA3] border-opacity-25 px-2 py-2 focus:outline-none"
              />
              <button onClick={(e) => handleRemoveColumn(e, index)}>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#828FA3" fillRule="evenodd">
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                  </g>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <button
          className="grid place-content-center rounded-full bg-violet-dark bg-opacity-10 py-3 text-[13px] font-bold text-violet-dark"
          onClick={handleAddColumn}
        >
          + Add New Column
        </button>

        <button
          className="grid place-content-center rounded-full bg-violet-dark py-3 text-[13px] font-bold text-white"
          onClick={handleSubmit}
        >
          Edit Board
        </button>
      </form>
    </div>
  );
}

export default NewColumnForm;
