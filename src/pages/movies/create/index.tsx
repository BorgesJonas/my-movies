import { MovieForm } from "../components/movie-form";
import { PageLayout } from "../../../components/page-layout";

export function Create() {
  return (
    <PageLayout title="Create Movie">
      <MovieForm />
    </PageLayout>
  );
}
