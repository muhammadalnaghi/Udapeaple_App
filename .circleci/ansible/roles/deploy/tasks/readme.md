## Deployment playbook goes here.
# Generate production build of the backend
cd backend
npm run build

# Archive the contents of the dist folder, along with backned package information
cd backend
tar -czf artifact.tar.gz dist/* package*

# Copy the files to the deploy role files folder to prepare for deploying it via ansible
cd .circleci
cp backend/artifact.tar.gz .circleci/ansible/roles/deploy/files
