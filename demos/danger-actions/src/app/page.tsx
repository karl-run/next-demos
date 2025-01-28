import FeedbackForm from "@/app/feedback-form/feedback-form";
import BrokenAction from "@/app/feedback-form/broken-action";

export default function Home() {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-2xl">Server Actions + Kubernetes = Danger</h1>
      <FeedbackForm />
        <BrokenAction />
    </main>
  );
}
