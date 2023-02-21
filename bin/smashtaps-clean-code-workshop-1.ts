#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SmashtapsCleanCodeWorkshop1Stack } from "../lib/smashtaps-clean-code-workshop-1-stack";

const app = new cdk.App();
new SmashtapsCleanCodeWorkshop1Stack(
  app,
  "SmashtapsCleanCodeWorkshop1Stack",
  {}
)
  .initCreateMeal()
  .initGetAllMeals();
