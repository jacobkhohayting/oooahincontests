type Values = { full_name?: string; username?: string; email?: string; student_id?: string };

/** The profile fields shared by the sign-up, profile and admin user forms. */
export function ProfileFields({
  values = {},
  emailHint,
  studentId = "optional",
}: {
  values?: Values;
  emailHint?: string;
  /** Whether to ask for a student ID, and whether it may be left empty. */
  studentId?: "required" | "optional" | "off";
}) {
  return (
    <>
      <label htmlFor="full_name">Full name</label>
      <input id="full_name" name="full_name" type="text" required maxLength={100} autoComplete="name" defaultValue={values.full_name} />

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        required
        minLength={3}
        maxLength={24}
        pattern="[A-Za-z0-9_]+"
        autoComplete="username"
        autoCapitalize="none"
        spellCheck={false}
        defaultValue={values.username}
      />
      <p className="help">Shown on leaderboards. Letters, numbers and underscores.</p>

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" defaultValue={values.email} />
      {emailHint && <p className="help">{emailHint}</p>}

      {studentId !== "off" && (
        <>
          <label htmlFor="student_id">
            Student ID {studentId === "optional" && <span className="muted">(optional)</span>}
          </label>
          <input
            id="student_id"
            name="student_id"
            type="text"
            required={studentId === "required"}
            maxLength={50}
            autoComplete="off"
            defaultValue={values.student_id}
          />
        </>
      )}
    </>
  );
}
