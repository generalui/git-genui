"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return Caf.importInvoke(
    [
      "describe",
      "test",
      "assert",
      "getMatchQuality",
      "getSearchRegExp",
      "Infinity",
      "approximateSearchSort"
    ],
    [global, require("../StandardImport")],
    (
      describe,
      test,
      assert,
      getMatchQuality,
      getSearchRegExp,
      Infinity,
      approximateSearchSort
    ) => {
      return describe({
        getMatchQuality: function() {
          test("regression where the first match is not the best match", () => {
            let string;
            string =
              "[#172038196] (started) make BATCH/ECS work in VPC private subnets";
            return assert.eq(
              getMatchQuality(string, getSearchRegExp("ecs")),
              300000034
            );
          });
          test("exact match", () => {
            let string;
            return assert.eq(
              getMatchQuality((string = "test ECS"), getSearchRegExp("ECS")),
              300010005
            );
          });
          test("wrong-case, exact match", () => {
            let string;
            return assert.eq(
              getMatchQuality((string = "test ECs"), getSearchRegExp("ECS")),
              300000005
            );
          });
          return test("regression - should not match", () => {
            let string;
            return assert.eq(
              getMatchQuality(
                (string =
                  "[#171681296] (started) Port existing LIMS deployment in Packer"),
                getSearchRegExp("ecs")
              ),
              Infinity
            );
          });
        },
        approximateSearchSort: function() {
          test("basics", () =>
            assert.eq(
              approximateSearchSort("hi", ["h__i", "h___i", "h_i", "hi"]),
              ["hi", "h_i", "h__i", "h___i"]
            ));
          test("stable1", () =>
            assert.eq(
              approximateSearchSort("hi", [
                "def_h-i",
                "abc_hi",
                "def_hi",
                "xyz_hi"
              ]),
              ["abc_hi", "def_hi", "xyz_hi", "def_h-i"]
            ));
          test("stable2", () =>
            assert.eq(
              approximateSearchSort("hi", [
                "def_h-i",
                "def_hi",
                "abc_hi",
                "xyz_hi"
              ]),
              ["def_hi", "abc_hi", "xyz_hi", "def_h-i"]
            ));
          test("stable2", () =>
            assert.eq(
              approximateSearchSort("hi", [
                "xyz_hi",
                "def_h-i",
                "def_hi",
                "abc_hi"
              ]),
              ["xyz_hi", "def_hi", "abc_hi", "def_h-i"]
            ));
          test("regression1", () =>
            assert.eq(
              approximateSearchSort("unstarted)", [
                "[170589418] (unstarted) On an iPhone, the home hero services menu has line wrapping in bad places. Needs some cleanup.",
                "[170466089] (unscheduled) The navigation needs to appear in opposite Style (light bg, dark links) when it is displayed on a page that has a light background top slat.",
                "[170465836] (unstarted) Footer needs cleanup",
                "[170652027] (unstarted) Services pages need case studies",
                "[170589433] (unstarted) Research SEO appropriate way to redirect genui.co to genui.com."
              ]),
              [
                "[170589418] (unstarted) On an iPhone, the home hero services menu has line wrapping in bad places. Needs some cleanup.",
                "[170465836] (unstarted) Footer needs cleanup",
                "[170652027] (unstarted) Services pages need case studies",
                "[170589433] (unstarted) Research SEO appropriate way to redirect genui.co to genui.com.",
                "[170466089] (unscheduled) The navigation needs to appear in opposite Style (light bg, dark links) when it is displayed on a page that has a light background top slat."
              ]
            ));
          test("regression2", () => {
            let strings;
            return assert.eq(
              approximateSearchSort(
                "ecs",
                (strings = [
                  "[#171681296] (started) Port existing LIMS deployment in Packer",
                  "[#171681331] (started) Create MVP Terraform resources for building LIMS infrastructure",
                  "[#171774768] (started) DynamoDB copy dry run",
                  "[#171829280] (finished) Admin / Production VPC-Peering terraform",
                  "[#171985502] (delivered) update pipeline with parameterized containers",
                  "[#172038175] (delivered) fix RDS snapshot dependency",
                  "[#172008673] (delivered) fix ECR container resource ARN",
                  "[#172038196] (started) make BATCH/ECS work in VPC private subnets",
                  "[#171985516] (unstarted) pipeline DRY run",
                  "[#171778115] (unstarted) Clean up Packer to only copy needed files to image",
                  "[#171714406] (unstarted) Re-factor Gitlab Terraform code for ResBio",
                  "[#171714386] (unstarted) Publish AWS internal DNS to local DNS server",
                  "[#171731205] (unstarted) Add S3 state target instructions and code to repo",
                  "[#171680672] (unstarted) ElasticSearch Cluster",
                  "[#172024942] (unscheduled) fix hard-coded aws_launch_template snapshot_id: snap-024061058e23ced93",
                  '[#172008654] (unscheduled) fix "aws_key_pair" "cloud_pipeline"',
                  "[#172006427] (unscheduled) remove -dev from S3 bucket names (Validate with Kevin)",
                  "[#171934681] (unscheduled) DynamoDB Dump restore",
                  "[#171934660] (unscheduled) DynamoDB cross-account dry-run",
                  "[#171934654] (unscheduled) S3 cross-account dry run",
                  "[#171934647] (unscheduled) RDS dynamodb cross-account dry run",
                  "[#171774137] (unscheduled) Identify Priority-1 S3 buckets to migrate",
                  "[#171680668] (unscheduled) LIMS > Docker > K8S",
                  "[#171774144] (unscheduled) S3 Bucket copy pre-pass",
                  "[#171774126] (unscheduled) RDS snapshot/restore dryrun",
                  "[#171773999] (unscheduled) draft data migration plan document",
                  "[#171773993] (unscheduled) internal DNS for new HIPAA environment",
                  "[#171738159] (unscheduled) Add AWS RDS CA chain retrieve/copy to Packer script",
                  "[#171737252] (unscheduled) Security Test Plan",
                  "[#171734707] (unscheduled) Fix LIMS NTP config to use AWS internal servers",
                  "[#171714372] (unscheduled) Test IPSEC VPN functionality on Sophos XG firewall",
                  "[#171680689] (unscheduled) SSO for K8S, AWS",
                  "[#171680684] (unscheduled) Split LIMS servers into LIMS, HUB and WORKERs",
                  "[#171680682] (unscheduled) HUB lockdown",
                  "[#171680680] (unscheduled) K8S built via TerraForm",
                  "[#171680675] (unscheduled) Centralized Logging",
                  "[#171680670] (unscheduled) RAP > K8S",
                  "[#171680665] (unscheduled) all secrets out of repos"
                ])
              ),
              [
                "[#172038196] (started) make BATCH/ECS work in VPC private subnets",
                "[#171680665] (unscheduled) all secrets out of repos",
                "[#171680672] (unstarted) ElasticSearch Cluster",
                "[#171681331] (started) Create MVP Terraform resources for building LIMS infrastructure",
                "[#171934654] (unscheduled) S3 cross-account dry run",
                "[#171737252] (unscheduled) Security Test Plan",
                "[#171985502] (delivered) update pipeline with parameterized containers",
                "[#171774144] (unscheduled) S3 Bucket copy pre-pass",
                "[#171731205] (unstarted) Add S3 state target instructions and code to repo",
                "[#172008673] (delivered) fix ECR container resource ARN",
                "[#171934660] (unscheduled) DynamoDB cross-account dry-run",
                "[#171738159] (unscheduled) Add AWS RDS CA chain retrieve/copy to Packer script",
                "[#171934647] (unscheduled) RDS dynamodb cross-account dry run",
                "[#171714406] (unstarted) Re-factor Gitlab Terraform code for ResBio",
                "[#171714386] (unstarted) Publish AWS internal DNS to local DNS server",
                "[#172024942] (unscheduled) fix hard-coded aws_launch_template snapshot_id: snap-024061058e23ced93",
                "[#171680668] (unscheduled) LIMS > Docker > K8S",
                "[#172006427] (unscheduled) remove -dev from S3 bucket names (Validate with Kevin)",
                "[#171714372] (unscheduled) Test IPSEC VPN functionality on Sophos XG firewall",
                "[#171774137] (unscheduled) Identify Priority-1 S3 buckets to migrate",
                "[#171778115] (unstarted) Clean up Packer to only copy needed files to image",
                "[#171734707] (unscheduled) Fix LIMS NTP config to use AWS internal servers"
              ]
            );
          });
          return test("regression3", () =>
            assert.eq(
              approximateSearchSort("fix", [
                "FIX:      bug fix",
                "TEST:     tests added, improved or fixed"
              ]),
              ["FIX:      bug fix", "TEST:     tests added, improved or fixed"]
            ));
        }
      });
    }
  );
});
