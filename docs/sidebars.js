module.exports = {
  docs: {
    "Introduction": ["introduction"],
    "Wallet Guide": [
      "wallet-guide",
      {
        type: "category",
        label: "App Wallets",
        items: [
          "wallet-guide/apps",
          "wallet-guide/trust-wallet",
          "wallet-guide/ledger-live",
        ],
      },
      {
        type: "category",
        label: "Command-line Wallets",
        items: [
          "wallet-guide/cli",
          "wallet-guide/paper-wallet",
          {
            type: "category",
            label: "Hardware Wallets",
            items: ["wallet-guide/hardware-wallets", "wallet-guide/hardware-wallets/ledger"],
          },
          "wallet-guide/file-system-wallet",
        ],
      },
      "wallet-guide/support",
    ],
    "Staking Guide": [
      "staking",
      "staking/stake-accounts",
    ],
    "Command Line Guide": [
      "cli",
      "cli/install-solana-cli-tools",
      "cli/conventions",
      "cli/choose-a-cluster",
      "cli/transfer-tokens",
      "cli/delegate-stake",
      "cli/manage-stake-accounts",
      "offline-signing",
      "offline-signing/durable-nonce",
    ],
    "Solana Clusters": ["clusters"],
    "Develop Applications": [
      "apps",
      "apps/rent",
      "apps/hello-world",
      "apps/break",
      "apps/webwallet",
      "apps/drones",
      "transaction",
      "apps/jsonrpc-api",
      "apps/javascript-api",
      "apps/builtins",
    ],
    "Integration Guides": ["integrations/exchange"],
    "Run a Validator": [
      "running-validator",
      "running-validator/validator-reqs",
      "running-validator/validator-start",
      "running-validator/validator-stake",
      "running-validator/validator-monitor",
      "running-validator/validator-info",
      "running-validator/validator-troubleshoot",
    ],
    "Tour de SOL": [
      "tour-de-sol",
      {
        type: "category",
        label: "Registration",
        items: [
          "tour-de-sol/registration/how-to-register",
          "tour-de-sol/registration/terms-of-participation",
          "tour-de-sol/registration/rewards",
          "tour-de-sol/registration/confidentiality",
          "tour-de-sol/registration/validator-registration-and-rewards-faq",
        ],
      },
      {
        type: "category",
        label: "Participation",
        items: [
          "tour-de-sol/participation/validator-technical-requirements",
          "tour-de-sol/participation/validator-public-key-registration",
          "tour-de-sol/participation/steps-to-create-a-validator",
        ],
      },
      "tour-de-sol/useful-links",
      "tour-de-sol/submitting-bugs",
    ],
    "Benchmark a Cluster": ["cluster/bench-tps", "cluster/performance-metrics"],
    "Solana's Architecture": [
      "cluster/overview",
      "cluster/synchronization",
      "cluster/leader-rotation",
      "cluster/fork-generation",
      "cluster/managing-forks",
      "cluster/turbine-block-propagation",
      "cluster/vote-signing",
      "cluster/stake-delegation-and-rewards",
    ],
    "Anatomy of a Validator": [
      "validator/anatomy",
      "validator/tpu",
      "validator/tvu",
      "validator/blockstore",
      "validator/gossip",
      "validator/runtime",
    ],
    Terminology: ["terminology"],
    History: ["history"],
    "Implemented Design Proposals": [
      "implemented-proposals/implemented-proposals",
      {
        type: "category",
        label: "Economic Design",
        items: [
          "implemented-proposals/ed_overview/ed_overview",
          {
            type: "category",
            label: "Validation Client Economics",
            items: [
              "implemented-proposals/ed_overview/ed_validation_client_economics/ed_vce_overview",
              "implemented-proposals/ed_overview/ed_validation_client_economics/ed_vce_state_validation_protocol_based_rewards",
              "implemented-proposals/ed_overview/ed_validation_client_economics/ed_vce_state_validation_transaction_fees",
              "implemented-proposals/ed_overview/ed_validation_client_economics/ed_vce_validation_stake_delegation",
            ],
          },
          "implemented-proposals/ed_overview/ed_storage_rent_economics",
          "implemented-proposals/ed_overview/ed_economic_sustainability",
          "implemented-proposals/ed_overview/ed_mvp",
          "implemented-proposals/ed_overview/ed_references",
        ],
      },
      "implemented-proposals/transaction-fees",
      "implemented-proposals/tower-bft",
      "implemented-proposals/leader-leader-transition",
      "implemented-proposals/leader-validator-transition",
      "implemented-proposals/persistent-account-storage",
      "implemented-proposals/reliable-vote-transmission",
      "implemented-proposals/repair-service",
      "implemented-proposals/testing-programs",
      "implemented-proposals/readonly-accounts",
      "implemented-proposals/staking-rewards",
      "implemented-proposals/rent",
      "implemented-proposals/durable-tx-nonces",
      "implemented-proposals/validator-timestamp-oracle",
      "implemented-proposals/commitment",
      "implemented-proposals/snapshot-verification",
      "implemented-proposals/cross-program-invocation",
      "implemented-proposals/program-derived-addresses",
      "implemented-proposals/abi-management",
    ],
    "Accepted Design Proposals": [
      "proposals/accepted-design-proposals",
      "proposals/ledger-replication-to-implement",
      "proposals/optimistic-confirmation-and-slashing",
      "proposals/vote-signing-to-implement",
      "proposals/cluster-test-framework",
      "proposals/validator-proposal",
      "proposals/simple-payment-and-state-verification",
      "proposals/interchain-transaction-verification",
      "proposals/snapshot-verification",
      "proposals/bankless-leader",
      "proposals/slashing",
      "proposals/tick-verification",
      "proposals/block-confirmation",
      "proposals/rust-clients",
      "proposals/optimistic_confirmation",
      "proposals/embedding-move",
    ],
  },
};
