CREATE TABLE "request_class"
  (
     "name"                          TEXT NOT NULL,
     "email"                         TEXT NOT NULL,
     "availability"                  TEXT NOT NULL,
     "bls_interested"                BOOLEAN NULL DEFAULT NULL,
     "heartsaver_aed_interested"     BOOLEAN NULL DEFAULT NULL,
     "heartsaver_firstaid_interested" BOOLEAN NULL DEFAULT NULL,
     "created"                       TIMESTAMP NOT NULL DEFAULT
     CURRENT_TIMESTAMP
  );
