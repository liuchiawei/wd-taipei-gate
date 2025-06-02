import SNSLinks from "@/components/common/SNSLinks";
import BackToTop from "@/components/common/backToTop";

export default function Footer() {
  return (
    <footer className="w-full text-center p-20 bg-neutral-200 dark:bg-neutral-700">
      <BackToTop />
      <SNSLinks />
      <p className="text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} <a className="text-foreground font-[500] hover:text-accent" href="https://liuchiawei.vercel.app/">リュウチャーウェイ</a> <br />
        All rights reserved
      </p>
    </footer>
  );
}

