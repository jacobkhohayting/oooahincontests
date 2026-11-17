import type { Metadata } from "next";
import Link from "next/link";
import { getSettingsSafe } from "@/lib/settings";

export const metadata: Metadata = { title: "Privacy notice" };

// Change this date whenever the text below changes in a way that matters.
const LAST_UPDATED = "November 17, 2026";

/**
 * What the site knows about its users and what happens to it. Every statement here
 * describes what the code actually does; if you change the code, change this page too.
 */
export default async function PrivacyPage() {
  const settings = await getSettingsSafe();
  const contact = settings.contactEmail ? (
    <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
  ) : (
    <>an organizer</>
  );
  const namesSeenBy =
    settings.namesVisibility === "everyone"
      ? "anyone who visits the site"
      : settings.namesVisibility === "organizers"
        ? "only the organizers"
        : "other logged-in users and the organizers";

  return (
    <main>
      <div className="prose">
        <h1>Privacy notice</h1>
        <p className="muted">Last updated: {LAST_UPDATED}</p>
        <p>
          {settings.siteName} is a free, non-commercial site for programming contests, run by its organizers. This
          page explains what the site knows about you, who can see it and how to have it removed.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Account details you type in:</strong> your full name, a username, your email address, a password
            and, if you choose to give one, a student ID.
          </li>
          <li>
            <strong>Your contest activity:</strong> which contests you enter, the code you submit, when you submit it
            and the results.
          </li>
          <li>
            <strong>Your network (IP) address:</strong> used only to limit repeated password guesses and floods of
            sign-ups or submissions. These records are removed automatically, normally within a day.
          </li>
        </ul>
        <p>
          The companies that host the site also keep short-lived technical logs of requests, such as the page address,
          the time, the browser type and the network address.
        </p>
        <p>
          We do not ask for your date of birth, address, phone number or payment details, and the site does not send
          email.
        </p>

        <h2>Passwords</h2>
        <p>
          Your password is stored only in a scrambled (hashed) form. Organizers cannot read it. If you forget it, an
          organizer can set a new one for you.
        </p>

        <h2>Cookies and browser storage</h2>
        <ul>
          <li>A login cookie keeps you signed in for up to 30 days, or until you log out.</li>
          <li>A second cookie remembers the light or dark theme if you switch it.</li>
          <li>
            Code you are writing is saved as a draft in your own browser. It reaches the site only when you press
            &ldquo;Run examples&rdquo; or &ldquo;Submit&rdquo;. Code sent with &ldquo;Run examples&rdquo; is run and
            then discarded; submitted code is kept.
          </li>
        </ul>
        <p>
          There are no advertising or analytics cookies, and the site does not follow you across other websites. For
          that reason it behaves the same whether or not your browser sends a &ldquo;Do Not Track&rdquo; signal.
        </p>

        <h2>Who can see what</h2>
        <ul>
          <li>
            <strong>Your username, results and leaderboard position:</strong> other people taking part in a contest
            and, once the contest has ended, anyone who visits the site.
          </li>
          <li>
            <strong>Your full name:</strong> {namesSeenBy}.
          </li>
          <li>
            <strong>Your code:</strong> you and the organizers. After a contest ends, the organizers may open all
            submissions to that contest for everyone to read.
          </li>
          <li>
            <strong>Your email address and student ID:</strong> only you and the organizers.
          </li>
        </ul>
        <p>Organizers can see everything listed above except your password.</p>

        <h2>What we use it for</h2>
        <p>
          Only to run the contests: signing you in, judging your code, showing leaderboards, keeping an archive of
          past contests and protecting the site from abuse. We do not sell your information, show advertising or use
          your information for anything else.
        </p>

        <h2>Who else handles it</h2>
        <p>
          The site runs on services provided by Vercel (hosting, and the isolated machines that run submitted code)
          and Neon (the database). They handle the information above only to provide those services, and their
          servers may be in a different country from you. We do not give your information to anyone else unless the
          law requires it.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Until you delete your account or an organizer removes it. Deleting an account also deletes its submissions
          and contest entries. Copies may remain for a short time in the database provider&apos;s backups.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>
            See and correct your details on <Link href="/profile">your profile</Link>.
          </li>
          <li>Delete your account yourself at the bottom of that page.</li>
          <li>For anything else, including questions about this notice, contact {contact}.</li>
        </ul>

        <h2>Children</h2>
        <p>
          The site is not meant for children under 13, and you must be 13 or older to create an account. If we learn
          that an account belongs to someone under 13, we delete it. A parent or guardian who believes their child has
          signed up can contact {contact}.
        </p>

        <h2>Changes to this notice</h2>
        <p>
          When this notice changes, the new version is posted on this page with a new date at the top. See also the{" "}
          <Link href="/terms">Terms of use</Link>.
        </p>
      </div>
    </main>
  );
}
