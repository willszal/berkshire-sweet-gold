# Co-op Investment Payment Portals Research

For co-op investment payments at $5k and $20k levels, there are important considerations around transaction limits, fees, and refund/buyback capabilities. 

## Transaction Limits and Fees
While Stripe is often thought to have a $10k limit, it **can** process payments over $10k — the default limit on new accounts can simply be raised by contacting their support team. 

However, for investment amounts this large, **ACH bank transfers** should be used rather than credit cards to avoid massive fees.

| Method | Fee on $20k payment | Notes |
|---|---|---|
| Credit card (2.9% + 30¢) | ~$580 | Prohibitive at these amounts |
| ACH via Stripe | **$5** (0.8% capped at $5) | **$5 max per transaction** |
| ACH via Dwolla | $0–$5 flat | Depends on plan |

## Top Recommendations

### 1. Stripe + ACH (via Stripe Financial Connections)
- **Best overall fit.** Handles $5k–$20k easily via ACH with a **$5 cap per transaction**.
- Built-in refund/payout support for member buybacks.
- Excellent developer experience for integrating into a React site.
- Supports identity verification (Stripe Identity) if needed for securities compliance.
- Can set up **Stripe Connect** if the co-op needs to manage payouts to members.

### 2. Dwolla
- Purpose-built for ACH transfers, great for larger amounts.
- Supports programmatic **refunds and payouts** (ideal for buybacks).
- White-label option so it feels native to the site.
- More complex integration than Stripe, but very reliable.

### 3. Mercury or Relay (Business Banking + API)
- Pairs a co-op bank account with APIs for tracking investments.
- Less of a "payment portal," more of a banking infrastructure play.

## Important Consideration: Securities Regulation

> [!CAUTION]
> Co-op ownership shares at $5k–$20k may be classified as **securities** under federal and state law, even for cooperatives. Depending on the structure, it may be necessary to:
> - File an exemption (e.g., Regulation D, Regulation A, or state-level co-op exemptions).
> - Use a platform like **Wefunder**, **Republic**, or **Honeycomb Credit** that handles compliance for community investment rounds.
> - Consult with an attorney familiar with cooperative securities law in Massachusetts.

## Final Recommendation
**Stripe + ACH** is the recommended path because it provides large payments with a strict $5 fee cap, supports programmatic refunds for member buybacks, offers easy React integration, and provides built-in identity verification if needed.
