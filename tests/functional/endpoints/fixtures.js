//reference: https://github.com/boto/botocore/blob/develop/tests/functional/test_regions.py
module.exports.KNOWN_REGIONS = {
  "ap-northeast-1": {
    "api-gateway": "apigateway.ap-northeast-1.amazonaws.com",
    appstream: "appstream2.ap-northeast-1.amazonaws.com",
    //autoscaling: "autoscaling.ap-northeast-1.amazonaws.com",
    //cloudformation: "cloudformation.ap-northeast-1.amazonaws.com",
    cloudhsm: "cloudhsm.ap-northeast-1.amazonaws.com",
    // cloudsearch: "cloudsearch.ap-northeast-1.amazonaws.com",
    cloudtrail: "cloudtrail.ap-northeast-1.amazonaws.com",
    codedeploy: "codedeploy.ap-northeast-1.amazonaws.com",
    "cognito-identity": "cognito-identity.ap-northeast-1.amazonaws.com",
    "cognito-sync": "cognito-sync.ap-northeast-1.amazonaws.com",
    "config-service": "config.ap-northeast-1.amazonaws.com",
    "data-pipeline": "datapipeline.ap-northeast-1.amazonaws.com",
    "direct-connect": "directconnect.ap-northeast-1.amazonaws.com",
    // ds: "ds.ap-northeast-1.amazonaws.com",
    dynamodb: "dynamodb.ap-northeast-1.amazonaws.com",
    // ec2: "ec2.ap-northeast-1.amazonaws.com",
    ecs: "ecs.ap-northeast-1.amazonaws.com",
    //elasticache: "elasticache.ap-northeast-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.ap-northeast-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.ap-northeast-1.amazonaws.com",
    emr: "ap-northeast-1.elasticmapreduce.amazonaws.com",
    "elastic-transcoder": "elastictranscoder.ap-northeast-1.amazonaws.com",
    glacier: "glacier.ap-northeast-1.amazonaws.com",
    //iot: "iot.ap-northeast-1.amazonaws.com",
    kinesis: "kinesis.ap-northeast-1.amazonaws.com",
    kms: "kms.ap-northeast-1.amazonaws.com",
    lambda: "lambda.ap-northeast-1.amazonaws.com",
    "cloudwatch-logs": "logs.ap-northeast-1.amazonaws.com",
    //monitoring: "monitoring.ap-northeast-1.amazonaws.com",
    //rds: "rds.ap-northeast-1.amazonaws.com",
    //redshift: "redshift.ap-northeast-1.amazonaws.com",
    //s3: "s3-ap-northeast-1.amazonaws.com",
    //sdb: "sdb.ap-northeast-1.amazonaws.com",
    //sns: "sns.ap-northeast-1.amazonaws.com",
    // sqs: "ap-northeast-1.queue.amazonaws.com",
    "storage-gateway": "storagegateway.ap-northeast-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.ap-northeast-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.ap-northeast-1.amazonaws.com",
    workspaces: "workspaces.ap-northeast-1.amazonaws.com",
    "rds-data": "rds-data.ap-northeast-1.amazonaws.com"
  },
  "ap-southeast-1": {
    //autoscaling: "autoscaling.ap-southeast-1.amazonaws.com",
    //cloudformation: "cloudformation.ap-southeast-1.amazonaws.com",
    cloudhsm: "cloudhsm.ap-southeast-1.amazonaws.com",
    // cloudsearch: "cloudsearch.ap-southeast-1.amazonaws.com",
    cloudtrail: "cloudtrail.ap-southeast-1.amazonaws.com",
    "config-service": "config.ap-southeast-1.amazonaws.com",
    "direct-connect": "directconnect.ap-southeast-1.amazonaws.com",
    // ds: "ds.ap-southeast-1.amazonaws.com",
    dynamodb: "dynamodb.ap-southeast-1.amazonaws.com",
    // ec2: "ec2.ap-southeast-1.amazonaws.com",
    //elasticache: "elasticache.ap-southeast-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.ap-southeast-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.ap-southeast-1.amazonaws.com",
    emr: "ap-southeast-1.elasticmapreduce.amazonaws.com",
    "elastic-transcoder": "elastictranscoder.ap-southeast-1.amazonaws.com",
    kinesis: "kinesis.ap-southeast-1.amazonaws.com",
    kms: "kms.ap-southeast-1.amazonaws.com",
    "cloudwatch-logs": "logs.ap-southeast-1.amazonaws.com",
    //monitoring: "monitoring.ap-southeast-1.amazonaws.com",
    //rds: "rds.ap-southeast-1.amazonaws.com",
    //redshift: "redshift.ap-southeast-1.amazonaws.com",
    //s3: "s3-ap-southeast-1.amazonaws.com",
    //sdb: "sdb.ap-southeast-1.amazonaws.com",
    //sns: "sns.ap-southeast-1.amazonaws.com",
    // sqs: "ap-southeast-1.queue.amazonaws.com",
    "storage-gateway": "storagegateway.ap-southeast-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.ap-southeast-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.ap-southeast-1.amazonaws.com",
    workspaces: "workspaces.ap-southeast-1.amazonaws.com",
    "rds-data": "rds-data.ap-southeast-1.amazonaws.com"
  },
  "ap-southeast-2": {
    //autoscaling: "autoscaling.ap-southeast-2.amazonaws.com",
    //cloudformation: "cloudformation.ap-southeast-2.amazonaws.com",
    cloudhsm: "cloudhsm.ap-southeast-2.amazonaws.com",
    // cloudsearch: "cloudsearch.ap-southeast-2.amazonaws.com",
    cloudtrail: "cloudtrail.ap-southeast-2.amazonaws.com",
    codedeploy: "codedeploy.ap-southeast-2.amazonaws.com",
    "config-service": "config.ap-southeast-2.amazonaws.com",
    "data-pipeline": "datapipeline.ap-southeast-2.amazonaws.com",
    "direct-connect": "directconnect.ap-southeast-2.amazonaws.com",
    // ds: "ds.ap-southeast-2.amazonaws.com",
    dynamodb: "dynamodb.ap-southeast-2.amazonaws.com",
    // ec2: "ec2.ap-southeast-2.amazonaws.com",
    ecs: "ecs.ap-southeast-2.amazonaws.com",
    //elasticache: "elasticache.ap-southeast-2.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.ap-southeast-2.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.ap-southeast-2.amazonaws.com",
    emr: "ap-southeast-2.elasticmapreduce.amazonaws.com",
    glacier: "glacier.ap-southeast-2.amazonaws.com",
    kinesis: "kinesis.ap-southeast-2.amazonaws.com",
    kms: "kms.ap-southeast-2.amazonaws.com",
    "cloudwatch-logs": "logs.ap-southeast-2.amazonaws.com",
    //monitoring: "monitoring.ap-southeast-2.amazonaws.com",
    //rds: "rds.ap-southeast-2.amazonaws.com",
    //redshift: "redshift.ap-southeast-2.amazonaws.com",
    //s3: "s3-ap-southeast-2.amazonaws.com",
    //sdb: "sdb.ap-southeast-2.amazonaws.com",
    //sns: "sns.ap-southeast-2.amazonaws.com",
    // sqs: "ap-southeast-2.queue.amazonaws.com",
    "storage-gateway": "storagegateway.ap-southeast-2.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.ap-southeast-2.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.ap-southeast-2.amazonaws.com",
    workspaces: "workspaces.ap-southeast-2.amazonaws.com",
    "rds-data": "rds-data.ap-southeast-2.amazonaws.com"
  },
  "aws-us-gov-global": {
    //iam: "iam.us-gov.amazonaws.com"
  },
  "cn-north-1": {
    //autoscaling: "autoscaling.cn-north-1.amazonaws.com.cn",
    //cloudformation: "cloudformation.cn-north-1.amazonaws.com.cn",
    cloudtrail: "cloudtrail.cn-north-1.amazonaws.com.cn",
    "direct-connect": "directconnect.cn-north-1.amazonaws.com.cn",
    dynamodb: "dynamodb.cn-north-1.amazonaws.com.cn",
    // ec2: "ec2.cn-north-1.amazonaws.com.cn",
    //elasticache: "elasticache.cn-north-1.amazonaws.com.cn",
    //elasticbeanstalk: "elasticbeanstalk.cn-north-1.amazonaws.com.cn",
    // elasticloadbalancing: "elasticloadbalancing.cn-north-1.amazonaws.com.cn",
    emr: "elasticmapreduce.cn-north-1.amazonaws.com.cn",
    glacier: "glacier.cn-north-1.amazonaws.com.cn",
    //iam: "iam.cn-north-1.amazonaws.com.cn",
    kinesis: "kinesis.cn-north-1.amazonaws.com.cn",
    //monitoring: "monitoring.cn-north-1.amazonaws.com.cn",
    //rds: "rds.cn-north-1.amazonaws.com.cn",
    //s3: "s3.cn-north-1.amazonaws.com.cn",
    //sns: "sns.cn-north-1.amazonaws.com.cn",
    // sqs: "cn-north-1.queue.amazonaws.com.cn",
    "storage-gateway": "storagegateway.cn-north-1.amazonaws.com.cn",
    "dynamodb-streams": "streams.dynamodb.cn-north-1.amazonaws.com.cn",
    // sts: "sts.cn-north-1.amazonaws.com.cn",
    swf: "swf.cn-north-1.amazonaws.com.cn",
    "rds-data": "rds-data.cn-north-1.amazonaws.com.cn"
  },
  "eu-central-1": {
    //autoscaling: "autoscaling.eu-central-1.amazonaws.com",
    //cloudformation: "cloudformation.eu-central-1.amazonaws.com",
    cloudhsm: "cloudhsm.eu-central-1.amazonaws.com",
    // cloudsearch: "cloudsearch.eu-central-1.amazonaws.com",
    cloudtrail: "cloudtrail.eu-central-1.amazonaws.com",
    codedeploy: "codedeploy.eu-central-1.amazonaws.com",
    "config-service": "config.eu-central-1.amazonaws.com",
    "direct-connect": "directconnect.eu-central-1.amazonaws.com",
    dynamodb: "dynamodb.eu-central-1.amazonaws.com",
    // ec2: "ec2.eu-central-1.amazonaws.com",
    //elasticache: "elasticache.eu-central-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.eu-central-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.eu-central-1.amazonaws.com",
    emr: "elasticmapreduce.eu-central-1.amazonaws.com",
    glacier: "glacier.eu-central-1.amazonaws.com",
    kinesis: "kinesis.eu-central-1.amazonaws.com",
    kms: "kms.eu-central-1.amazonaws.com",
    "cloudwatch-logs": "logs.eu-central-1.amazonaws.com",
    //monitoring: "monitoring.eu-central-1.amazonaws.com",
    //rds: "rds.eu-central-1.amazonaws.com",
    //redshift: "redshift.eu-central-1.amazonaws.com",
    //s3: "s3.eu-central-1.amazonaws.com",
    //sns: "sns.eu-central-1.amazonaws.com",
    // sqs: "eu-central-1.queue.amazonaws.com",
    "storage-gateway": "storagegateway.eu-central-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.eu-central-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.eu-central-1.amazonaws.com"
  },
  "eu-west-1": {
    "api-gateway": "apigateway.eu-west-1.amazonaws.com",
    //autoscaling: "autoscaling.eu-west-1.amazonaws.com",
    //cloudformation: "cloudformation.eu-west-1.amazonaws.com",
    cloudhsm: "cloudhsm.eu-west-1.amazonaws.com",
    // cloudsearch: "cloudsearch.eu-west-1.amazonaws.com",
    cloudtrail: "cloudtrail.eu-west-1.amazonaws.com",
    codedeploy: "codedeploy.eu-west-1.amazonaws.com",
    "cognito-identity": "cognito-identity.eu-west-1.amazonaws.com",
    "cognito-sync": "cognito-sync.eu-west-1.amazonaws.com",
    "config-service": "config.eu-west-1.amazonaws.com",
    "data-pipeline": "datapipeline.eu-west-1.amazonaws.com",
    "direct-connect": "directconnect.eu-west-1.amazonaws.com",
    // ds: "ds.eu-west-1.amazonaws.com",
    dynamodb: "dynamodb.eu-west-1.amazonaws.com",
    // ec2: "ec2.eu-west-1.amazonaws.com",
    ecs: "ecs.eu-west-1.amazonaws.com",
    //elasticache: "elasticache.eu-west-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.eu-west-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.eu-west-1.amazonaws.com",
    emr: "eu-west-1.elasticmapreduce.amazonaws.com",
    "elastic-transcoder": "elastictranscoder.eu-west-1.amazonaws.com",
    sesv2: "email.eu-west-1.amazonaws.com",
    glacier: "glacier.eu-west-1.amazonaws.com",
    //iot: "iot.eu-west-1.amazonaws.com",
    kinesis: "kinesis.eu-west-1.amazonaws.com",
    kms: "kms.eu-west-1.amazonaws.com",
    lambda: "lambda.eu-west-1.amazonaws.com",
    "cloudwatch-logs": "logs.eu-west-1.amazonaws.com",
    "machine-learning": "machinelearning.eu-west-1.amazonaws.com",
    //monitoring: "monitoring.eu-west-1.amazonaws.com",
    //rds: "rds.eu-west-1.amazonaws.com",
    //redshift: "redshift.eu-west-1.amazonaws.com",
    //s3: "s3-eu-west-1.amazonaws.com",
    //sdb: "sdb.eu-west-1.amazonaws.com",
    //sns: "sns.eu-west-1.amazonaws.com",
    // sqs: "eu-west-1.queue.amazonaws.com",
    ssm: "ssm.eu-west-1.amazonaws.com",
    "storage-gateway": "storagegateway.eu-west-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.eu-west-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.eu-west-1.amazonaws.com",
    workspaces: "workspaces.eu-west-1.amazonaws.com"
  },
  "fips-us-gov-west-1": {
    //s3: "s3-fips-us-gov-west-1.amazonaws.com"
  },
  "s3-external-1": {
    //s3: "s3-external-1.amazonaws.com"
  },
  "sa-east-1": {
    //autoscaling: "autoscaling.sa-east-1.amazonaws.com",
    //cloudformation: "cloudformation.sa-east-1.amazonaws.com",
    // cloudsearch: "cloudsearch.sa-east-1.amazonaws.com",
    cloudtrail: "cloudtrail.sa-east-1.amazonaws.com",
    "config-service": "config.sa-east-1.amazonaws.com",
    "direct-connect": "directconnect.sa-east-1.amazonaws.com",
    dynamodb: "dynamodb.sa-east-1.amazonaws.com",
    // ec2: "ec2.sa-east-1.amazonaws.com",
    //elasticache: "elasticache.sa-east-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.sa-east-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.sa-east-1.amazonaws.com",
    emr: "sa-east-1.elasticmapreduce.amazonaws.com",
    kms: "kms.sa-east-1.amazonaws.com",
    //monitoring: "monitoring.sa-east-1.amazonaws.com",
    //rds: "rds.sa-east-1.amazonaws.com",
    //s3: "s3-sa-east-1.amazonaws.com",
    //sdb: "sdb.sa-east-1.amazonaws.com",
    //sns: "sns.sa-east-1.amazonaws.com",
    // sqs: "sa-east-1.queue.amazonaws.com",
    "storage-gateway": "storagegateway.sa-east-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.sa-east-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.sa-east-1.amazonaws.com"
  },
  "us-east-1": {
    "api-gateway": "apigateway.us-east-1.amazonaws.com",
    appstream: "appstream2.us-east-1.amazonaws.com",
    //autoscaling: "autoscaling.us-east-1.amazonaws.com",
    //cloudformation: "cloudformation.us-east-1.amazonaws.com",
    //cloudfront: "cloudfront.amazonaws.com",
    cloudhsm: "cloudhsm.us-east-1.amazonaws.com",
    // cloudsearch: "cloudsearch.us-east-1.amazonaws.com",
    cloudtrail: "cloudtrail.us-east-1.amazonaws.com",
    codecommit: "codecommit.us-east-1.amazonaws.com",
    codedeploy: "codedeploy.us-east-1.amazonaws.com",
    codepipeline: "codepipeline.us-east-1.amazonaws.com",
    "cognito-identity": "cognito-identity.us-east-1.amazonaws.com",
    "cognito-sync": "cognito-sync.us-east-1.amazonaws.com",
    "config-service": "config.us-east-1.amazonaws.com",
    "data-pipeline": "datapipeline.us-east-1.amazonaws.com",
    "direct-connect": "directconnect.us-east-1.amazonaws.com",
    // ds: "ds.us-east-1.amazonaws.com",
    dynamodb: "dynamodb.us-east-1.amazonaws.com",
    // ec2: "ec2.us-east-1.amazonaws.com",
    ecs: "ecs.us-east-1.amazonaws.com",
    //elasticache: "elasticache.us-east-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.us-east-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.us-east-1.amazonaws.com",
    emr: "elasticmapreduce.us-east-1.amazonaws.com",
    "elastic-transcoder": "elastictranscoder.us-east-1.amazonaws.com",
    sesv2: "email.us-east-1.amazonaws.com",
    glacier: "glacier.us-east-1.amazonaws.com",
    //iam: "iam.amazonaws.com",
    //importexport:: "//importexport:.amazonaws.com",
    //iot: "iot.us-east-1.amazonaws.com",
    kinesis: "kinesis.us-east-1.amazonaws.com",
    kms: "kms.us-east-1.amazonaws.com",
    lambda: "lambda.us-east-1.amazonaws.com",
    "cloudwatch-logs": "logs.us-east-1.amazonaws.com",
    "machine-learning": "machinelearning.us-east-1.amazonaws.com",
    //mobileanalytics: "mobileanalytics.us-east-1.amazonaws.com",
    //monitoring: "monitoring.us-east-1.amazonaws.com",
    opsworks: "opsworks.us-east-1.amazonaws.com",
    //rds: "rds.amazonaws.com",
    //redshift: "redshift.us-east-1.amazonaws.com",
    //route53: "route53.amazonaws.com",
    "route-53-domains": "route53domains.us-east-1.amazonaws.com",
    //s3: "s3.amazonaws.com",
    //sdb: "sdb.amazonaws.com",
    //sns: "sns.us-east-1.amazonaws.com",
    // sqs: "queue.amazonaws.com",
    ssm: "ssm.us-east-1.amazonaws.com",
    "storage-gateway": "storagegateway.us-east-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.us-east-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    support: "support.us-east-1.amazonaws.com",
    swf: "swf.us-east-1.amazonaws.com",
    workspaces: "workspaces.us-east-1.amazonaws.com",
    waf: "waf.amazonaws.com"
  },
  "us-gov-west-1": {
    //autoscaling: "autoscaling.us-gov-west-1.amazonaws.com",
    //cloudformation: "cloudformation.us-gov-west-1.amazonaws.com",
    cloudhsm: "cloudhsm.us-gov-west-1.amazonaws.com",
    cloudtrail: "cloudtrail.us-gov-west-1.amazonaws.com",
    dynamodb: "dynamodb.us-gov-west-1.amazonaws.com",
    // ec2: "ec2.us-gov-west-1.amazonaws.com",
    //elasticache: "elasticache.us-gov-west-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.us-gov-west-1.amazonaws.com",
    emr: "elasticmapreduce.us-gov-west-1.amazonaws.com",
    glacier: "glacier.us-gov-west-1.amazonaws.com",
    //iam: "iam.us-gov.amazonaws.com",
    kms: "kms.us-gov-west-1.amazonaws.com",
    //monitoring: "monitoring.us-gov-west-1.amazonaws.com",
    //rds: "rds.us-gov-west-1.amazonaws.com",
    //redshift: "redshift.us-gov-west-1.amazonaws.com",
    //s3: "s3-us-gov-west-1.amazonaws.com",
    //sns: "sns.us-gov-west-1.amazonaws.com",
    // sqs: "us-gov-west-1.queue.amazonaws.com",
    // sts: "sts.us-gov-west-1.amazonaws.com",
    swf: "swf.us-gov-west-1.amazonaws.com"
  },
  "us-west-1": {
    //autoscaling: "autoscaling.us-west-1.amazonaws.com",
    //cloudformation: "cloudformation.us-west-1.amazonaws.com",
    // cloudsearch: "cloudsearch.us-west-1.amazonaws.com",
    cloudtrail: "cloudtrail.us-west-1.amazonaws.com",
    "config-service": "config.us-west-1.amazonaws.com",
    "direct-connect": "directconnect.us-west-1.amazonaws.com",
    dynamodb: "dynamodb.us-west-1.amazonaws.com",
    // ec2: "ec2.us-west-1.amazonaws.com",
    ecs: "ecs.us-west-1.amazonaws.com",
    //elasticache: "elasticache.us-west-1.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.us-west-1.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.us-west-1.amazonaws.com",
    emr: "us-west-1.elasticmapreduce.amazonaws.com",
    "elastic-transcoder": "elastictranscoder.us-west-1.amazonaws.com",
    glacier: "glacier.us-west-1.amazonaws.com",
    kinesis: "kinesis.us-west-1.amazonaws.com",
    kms: "kms.us-west-1.amazonaws.com",
    "cloudwatch-logs": "logs.us-west-1.amazonaws.com",
    //monitoring: "monitoring.us-west-1.amazonaws.com",
    //rds: "rds.us-west-1.amazonaws.com",
    //s3: "s3-us-west-1.amazonaws.com",
    //sdb: "sdb.us-west-1.amazonaws.com",
    //sns: "sns.us-west-1.amazonaws.com",
    // sqs: "us-west-1.queue.amazonaws.com",
    "storage-gateway": "storagegateway.us-west-1.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.us-west-1.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.us-west-1.amazonaws.com"
  },
  "us-west-2": {
    "api-gateway": "apigateway.us-west-2.amazonaws.com",
    //autoscaling: "autoscaling.us-west-2.amazonaws.com",
    //cloudformation: "cloudformation.us-west-2.amazonaws.com",
    cloudhsm: "cloudhsm.us-west-2.amazonaws.com",
    // cloudsearch: "cloudsearch.us-west-2.amazonaws.com",
    cloudtrail: "cloudtrail.us-west-2.amazonaws.com",
    codedeploy: "codedeploy.us-west-2.amazonaws.com",
    codepipeline: "codepipeline.us-west-2.amazonaws.com",
    "config-service": "config.us-west-2.amazonaws.com",
    "data-pipeline": "datapipeline.us-west-2.amazonaws.com",
    "device-farm": "devicefarm.us-west-2.amazonaws.com",
    "direct-connect": "directconnect.us-west-2.amazonaws.com",
    // ds: "ds.us-west-2.amazonaws.com",
    dynamodb: "dynamodb.us-west-2.amazonaws.com",
    // ec2: "ec2.us-west-2.amazonaws.com",
    ecs: "ecs.us-west-2.amazonaws.com",
    //elasticache: "elasticache.us-west-2.amazonaws.com",
    //elasticbeanstalk: "elasticbeanstalk.us-west-2.amazonaws.com",
    efs: "elasticfilesystem.us-west-2.amazonaws.com",
    // elasticloadbalancing: "elasticloadbalancing.us-west-2.amazonaws.com",
    emr: "us-west-2.elasticmapreduce.amazonaws.com",
    "elastic-transcoder": "elastictranscoder.us-west-2.amazonaws.com",
    sesv2: "email.us-west-2.amazonaws.com",
    glacier: "glacier.us-west-2.amazonaws.com",
    //iot: "iot.us-west-2.amazonaws.com",
    kinesis: "kinesis.us-west-2.amazonaws.com",
    kms: "kms.us-west-2.amazonaws.com",
    lambda: "lambda.us-west-2.amazonaws.com",
    "cloudwatch-logs": "logs.us-west-2.amazonaws.com",
    //monitoring: "monitoring.us-west-2.amazonaws.com",
    //rds: "rds.us-west-2.amazonaws.com",
    //redshift: "redshift.us-west-2.amazonaws.com",
    //s3: "s3-us-west-2.amazonaws.com",
    //sdb: "sdb.us-west-2.amazonaws.com",
    //sns: "sns.us-west-2.amazonaws.com",
    // sqs: "us-west-2.queue.amazonaws.com",
    ssm: "ssm.us-west-2.amazonaws.com",
    "storage-gateway": "storagegateway.us-west-2.amazonaws.com",
    "dynamodb-streams": "streams.dynamodb.us-west-2.amazonaws.com",
    // sts: "sts.amazonaws.com",
    swf: "swf.us-west-2.amazonaws.com",
    workspaces: "workspaces.us-west-2.amazonaws.com"
  }
};
