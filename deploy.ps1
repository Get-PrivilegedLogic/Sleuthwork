Write-Host "🚀 Deploying Sleuthwork..." -ForegroundColor Green

# Variables
$BUCKET_NAME = "sleuthwork-app"
$DISTRIBUTION_ID = "E39DGXXW6LUXCG"

# Build
Write-Host "📦 Building production bundle..." -ForegroundColor Yellow
npm run build

# Upload to S3
Write-Host "☁️ Uploading to S3..." -ForegroundColor Yellow
aws s3 sync dist/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=31536000" --exclude "index.html" --exclude "sleuth-favicon.svg"

aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html --cache-control "public, max-age=0, must-revalidate"

aws s3 cp dist/sleuth-favicon.svg s3://$BUCKET_NAME/sleuth-favicon.svg --cache-control "public, max-age=31536000"

# Invalidate CloudFront cache
Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

Write-Host "✅ Deploy complete!" -ForegroundColor Green
Write-Host "🌐 Live at: https://sleuthwork.app" -ForegroundColor Cyan