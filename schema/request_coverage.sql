CREATE TABLE "request_coverage"
(
  "org_name"          TEXT NULL,
  "contact_name"      TEXT NOT NULL,
  "contact_email"     TEXT NOT NULL,
  "contact_phone"     TEXT NOT NULL,
  "secondary_contact_name"     TEXT NULL,
  "secondary_contact_phone"     TEXT NULL,
  "secondary_contact_email"     TEXT NULL,
  "event_name"        TEXT NULL,
  "event_location"    TEXT NOT NULL,
  "date"              DATE NOT NULL,
  "arrival_time"      TIME NOT NULL,
  "event_type"        TEXT NOT NULL,
  "expected_outcome"    INT NOT NULL,
  "expected_duration" NUMERIC(3, 1) NOT NULL,
  "tier"              TEXT NOT NULL,
  "more_info"                TEXT NULL,
  "created"           TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  "updated"    timestamp NULL
);
