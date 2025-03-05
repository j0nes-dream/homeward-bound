import { Alert, Box, GridForm, Text } from "@codecademy/gamut";
import { loginUser } from "../../data/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login: React.FC = () => {
  const [loginState, setLoginState] = useState({ error: false, resp: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      bg="background-selected"
      borderColor={"shadow-secondary"}
      borderRadius={"xl"}
      borderStyle="solid"
      borderWidth={1}
      py={16}
      px={32}
      width={{ _: "100%", xs: "75%", sm: "45%" }}
      maxWidth="24rem"
    >
      <Text
        as="h1"
        variant="title-sm"
        width="100%"
        textAlign={"center"}
        mt={8}
        mb={24}
      >
        log in to homeward bound
      </Text>
      {loginState?.error && <Alert type="error">{loginState.resp}</Alert>}
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
        onSubmit={async (values: { email: string; name: string }) => {
          setLoading(true);
          const resp = await loginUser(values);
          if (resp?.error) {
            setLoginState(resp);
          } else {
            navigate("/pups");
          }
          setLoading(false);
        }}
        submit={{
          contents: "login",
          loading: loading,
          position: "right",
          size: 12,
        }}
      />
    </Box>
  );
};
