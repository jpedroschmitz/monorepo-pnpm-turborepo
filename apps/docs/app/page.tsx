import { Button, Header } from "ui";
import { CalendarIcon } from "icons";

export default function Page() {
  return (
    <>
      <Header text="Docs" />
      <CalendarIcon
        style={{
          color: "red",
        }}
      />
      <Button />
    </>
  );
}
