#!/bin/bash

echo "🚀 Deploying Sleuthwork..."

# Variables
BUCKET_NAME="sleuthwork-app"
DISTRIBUTION_ID="E39DGXXW6LUXCG"

# Build
echo "📦 Building production bundle..."
npm run build

# Upload to S3
echo "☁️ Uploading to S3..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "index.html" \
  --exclude "sleuth-favicon.svg"

aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
  --cache-control "public, max-age=0, must-revalidate"

aws s3 cp dist/sleuth-favicon.svg s3://$BUCKET_NAME/sleuth-favicon.svg \
  --cache-control "public, max-age=31536000"

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

echo "✅ Deploy complete!"
echo "🌐 Live at: https://d12duwmim3eyu.cloudfront.net"