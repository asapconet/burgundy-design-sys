import { Button } from "../../../src/components";

export function AccountSettings() {
  return (
    <section className="rounded-ds-lg bg-ds-background p-ds-4">
      <h2 className="text-ds-foreground">Account settings</h2>

      <Button className="mt-ds-4">Save changes</Button>

      <Button variant="ghost" className="mt-ds-2">
        Advanced settings
      </Button>
    </section>
  );
}
