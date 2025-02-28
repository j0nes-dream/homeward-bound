import { Box, GridForm, StrokeButton } from "@codecademy/gamut";
import { loginUser } from "../../data/auth";

export const Login: React.FC = () => {
  return (
    <Box
      bg="background-selected"
      borderColor={"shadow-secondary"}
      borderRadius={"xl"}
      borderStyle="solid"
      borderWidth={1}
      py={"16"}
      px={"32"}
      width={{ _: "100%", xs: "75%", sm: "45%" }}
      maxWidth="24rem"
    >
      <StrokeButton
        onClick={() => loginUser({ username: "j0nes", name: "me" })}
      >
        Login automagically
      </StrokeButton>
      <GridForm
        hideRequiredText
        fields={[
          {
            label: "email",
            name: "email",
            type: "text",
            size: 12,
            validation: { required: true },
          },
          {
            label: "name",
            name: "name",
            type: "text",
            size: 12,
            validation: { required: true },
          },
        ]}
        onSubmit={(values) => {
          action("Form Submitted")(values);
        }}
        submit={{
          contents: "login",
          position: "right",
          size: 12,
        }}
      />
    </Box>
  );
};
