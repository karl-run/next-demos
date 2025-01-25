# Nextjs med Dockerfile

Begge eksemplene bruker standalone output.

Eksempelet direkte (Dockerfile.big) fra next-docsa brukr node22 alpine.

Mitt eget eksempel (Dockerfile) bruker distroless (pinnet til spesifikk SHA). Appen bygges på host så selve dockerbygget er veldig raskt.

## Output

Størrelsen på outputten er ganske lik, distroless er marginalt mindre med ca 20mb, 204MB vs 187MB

