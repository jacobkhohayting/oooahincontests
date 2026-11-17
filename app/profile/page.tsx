import type { Metadata } from "next";
import { requireUser } from "@/lib/auth";
import { getSettings } from "@/lib/settings";
import { deleteAccount, updateProfile } from "@/lib/actions/auth";
import { ActionForm } from "@/components/ActionForm";
import { ProfileFields } from "@/components/ProfileFields";

export const metadata: Metadata = { title: "Your profile" };

export default async function ProfilePage() {
  const user = await requireUser("/profile");
  const { studentId } = await getSettings();
  return (
    <main>
      <div className="narrow">
        <h1>Your profile</h1>
        <ActionForm action={updateProfile}>
          <ProfileFields values={user} studentId={studentId} />
          <h2>Change password</h2>
          <p className="help">Leave both empty to keep your current password.</p>
          <label htmlFor="current_password">Current password</label>
          <input id="current_password" name="current_password" type="password" autoComplete="current-password" />
          <label htmlFor="new_password">New password</label>
          <input id="new_password" name="new_password" type="password" minLength={8} maxLength={200} autoComplete="new-password" />
          <div className="form-actions">
            <button className="btn primary">Save profile</button>
          </div>
        </ActionForm>

        <h2>Delete your account</h2>
        <p className="help">
          Removes your account together with your submissions and your place on leaderboards. This cannot be undone.
        </p>
        <ActionForm
          action={deleteAccount}
          messages="bottom"
          confirm="Delete your account and all of your submissions for good?"
        >
          <label htmlFor="delete_password">Your password, to confirm</label>
          <input id="delete_password" name="password" type="password" required autoComplete="current-password" />
          <div className="form-actions">
            <button className="btn danger">Delete my account</button>
          </div>
        </ActionForm>
      </div>
    </main>
  );
}
