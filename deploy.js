#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Build the project
  console.log('📦 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Add all changes
  console.log('📝 Adding changes to git...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  console.log('💾 Committing changes...');
  const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  execSync(`git commit -m "Auto-deploy: ${date}"`, { stdio: 'inherit' });

  // Push to main branch
  console.log('⬆️ Pushing to main branch...');
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('✅ Deployment process completed!');
  console.log('🌐 Your site will be available at https://kskmr6390.github.io/personal-portfolio/ in a few minutes.');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 