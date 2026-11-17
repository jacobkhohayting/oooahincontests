import type { Metadata } from "next";
import Link from "next/link";
import { getSettingsSafe } from "@/lib/settings";

export const metadata: Metadata = { title: "Terms of use" };

// Change this date whenever the text below changes in a way that matters.
const LAST_UPDATED = "November 17, 2026";

/** The rules for using the site. Keep them in step with how the site is really run. */
export default async function TermsPage() {
  const settings = await getSettingsSafe();
  const contact = settings.contactEmail ? (
    <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
  ) : (
    <>an organizer</>
  );

  return (
    <main>
      <div className="prose">
        <h1>Terms of use</h1>
        <p className="muted">Last updated: {LAST_UPDATED}</p>
        <p>
          {settings.siteName} is a free, non-commercial site for programming contests, run by its organizers. By
          creating an account or using the site you agree to these terms. If you do not agree, please do not use the
          site.
        </p>

        <h2>Who can use it</h2>
        <p>
          You must be at least 13 years old. If you are under 18, make sure a parent or guardian is happy for you to
          use the site.
        </p>

        <h2>Your account</h2>
        <ul>
          <li>Give accurate details when you sign up, and keep them up to date.</li>
          <li>Keep your password to yourself. You are responsible for what is done with your account.</li>
          <li>Tell an organizer if you think someone else has used it.</li>
        </ul>

        <h2>Fair play</h2>
        <ul>
          <li>Submit only your own work, unless a contest&apos;s rules say otherwise.</li>
          <li>While a contest is running, do not share solutions or ask others for theirs.</li>
          <li>Use one account per person.</li>
          <li>
            Do not try to break, overload or get around the site. That includes trying to read hidden tests, reaching
            other people&apos;s accounts or information, attacking the judge and flooding it with submissions.
          </li>
          <li>Code you submit must not try to harm the machines that run it.</li>
        </ul>
        <p>
          Organizers may disqualify submissions, rejudge them, correct leaderboards and suspend or remove accounts
          when they believe these rules were broken or a mistake was made. Their decisions about contest results are
          final.
        </p>

        <h2>Your code</h2>
        <p>
          The code you submit stays yours. You give the site permission to store it, run it for judging and show it
          and its results as described in the <Link href="/privacy">Privacy notice</Link>. That includes making it
          readable by everyone after a contest has ended, if the organizers switch that on for the contest.
        </p>
        <p>
          Problem statements and other material on the site belong to their authors. Do not republish them without
          permission.
        </p>

        <h2>No guarantees</h2>
        <p>
          The site is provided as it is, free of charge, with no promise that it will always be available or free of
          mistakes. Verdicts and leaderboards can be wrong and can be corrected later, and submissions or accounts
          could be lost. As far as the law allows, the organizers are not liable for any loss that comes from using
          the site.
        </p>

        <h2>Leaving</h2>
        <p>
          You can delete your account at any time from <Link href="/profile">your profile</Link>. The organizers may
          close the site or stop offering it at any time.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          When these terms change, the new version is posted on this page with a new date at the top. If you keep
          using the site after that, the new terms apply to you.
        </p>

        <h2>Contact</h2>
        <p>Questions about these terms or the site: contact {contact}.</p>
      </div>
    </main>
  );
}
