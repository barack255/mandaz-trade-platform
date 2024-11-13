#!/bin/bash

# Deployment script to deploy Mandaz Trade Platform

# Backend Deployment
echo "Deploying backend..."
cd backend
git push heroku main

# Frontend Deployment (Vercel or Netlify)
echo "Deploying frontend..."
cd frontend
npm run build
vercel --prod

# Mobile Deployment (Expo or React Native)
echo "Deploying mobile app..."
cd mobile
expo build:ios
expo build:android
