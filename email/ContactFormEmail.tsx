import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";

type Props = {
  name: string;
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ name, message, senderEmail }: Props) {
  return (
    <Html>
      <Head />
      <Preview>{`${name} sent you a message from your portfolio`}</Preview>
      <Body style={{ backgroundColor: "#f6f6f4", fontFamily: "Helvetica, Arial, sans-serif", color: "#111111", padding: "32px 0" }}>
        <Container style={{ maxWidth: 560, margin: "0 auto" }}>
          <Section style={{ backgroundColor: "#ffffff", border: "1px solid #ddddd9", borderRadius: 16, padding: "28px 32px" }}>
            <Text style={{ margin: 0, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#c40a04" }}>Portfolio · contact form</Text>
            <Heading as="h1" style={{ fontSize: 22, lineHeight: 1.3, margin: "12px 0 20px" }}>
              New message from {name}
            </Heading>
            <Text style={{ fontSize: 15, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{message}</Text>
            <Hr style={{ borderColor: "#e6e6e2", margin: "24px 0" }} />
            <Text style={{ fontSize: 13, color: "#626260", margin: 0 }}>
              Reply directly to this email to reach {name} at {senderEmail}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
