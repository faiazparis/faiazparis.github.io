#!/bin/bash

# Script to fix spacing issues after </strong> tags
# Usage: ./fix-spacing.sh

echo "Fixing spacing issues after </strong> tags..."

# Fix common spacing issues
find . -name "*.tsx" -exec sed -i '' 's/<strong>\([^<]*\)<\/strong>\([^ ]\)/<strong>\1<\/strong> \2/g' {} \;

# Fix specific patterns
find . -name "*.tsx" -exec sed -i '' 's/<strong>\([^<]*\)<\/strong>,/<strong>\1<\/strong>, /g' {} \;
find . -name "*.tsx" -exec sed -i '' 's/<strong>\([^<]*\)<\/strong>\./<strong>\1<\/strong>. /g' {} \;
find . -name "*.tsx" -exec sed -i '' 's/<strong>\([^<]*\)<\/strong>:/<strong>\1<\/strong>: /g' {} \;

echo "Spacing fixes applied!"
