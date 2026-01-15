import { Typography } from "../components/Typography";

export default function Page() {
  return (
    <div className="flex item-center justify-center">
      <div className="space-y-4">
        <div className="text-[1.75rem]">Typography</div>
        <Typography variant="h1">Heading One</Typography>
        <Typography variant="h2">Heading Two</Typography>
        <Typography variant="h3">Heading Three</Typography>
        <Typography variant="h4">Heading Four</Typography>
        <Typography variant="h5">Heading Five</Typography>
        <Typography variant="h6">Heading Six</Typography>
        <Typography variant="body">
          This is body text using Lato Regular.
        </Typography>
      </div>
    </div>
  );
}
