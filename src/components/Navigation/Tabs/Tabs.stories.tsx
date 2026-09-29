import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "account",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>

        <TabsTrigger value="security">Security</TabsTrigger>

        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        Manage your account details and profile information.
      </TabsContent>

      <TabsContent value="security">
        Update your password and security preferences.
      </TabsContent>

      <TabsContent value="notifications">
        Configure how you receive notifications.
      </TabsContent>
    </Tabs>
  ),
};
