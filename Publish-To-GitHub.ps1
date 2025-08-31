param(
  [Parameter(Mandatory=$true)][string]$ProjectPath,
  [Parameter(Mandatory=$true)][string]$RepoName,
  [Parameter(Mandatory=$true)][string]$GitHubUser
)

$ErrorActionPreference = "Stop"

function Info($t){ Write-Host "[INFO] $t" -f Cyan }
function Ok($t){ Write-Host "[OK] $t" -f Green }
function Warn($t){ Write-Host "[WARN] $t" -f Yellow }
function Err($t){ Write-Host "[ERR] $t" -f Red }

if(-not (Test-Path $ProjectPath)){ Err "Path not found: $ProjectPath"; exit 1 }
Set-Location $ProjectPath

# Ensure Git
try { Get-Command git -ErrorAction Stop | Out-Null }
catch {
  Warn "Git not found. Trying to install via winget..."
  try {
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements --silent | Out-Null
    Get-Command git -ErrorAction Stop | Out-Null
    Ok "Git installed."
  } catch { Err "Install Git manually: https://git-scm.com/download/win"; exit 1 }
}

# Basic config
if(-not (git config --global user.name))  { git config --global user.name "$GitHubUser" | Out-Null }
if(-not (git config --global user.email)) { git config --global user.email "$GitHubUser@users.noreply.github.com" | Out-Null }

# Init repo
if(-not (Test-Path ".git")){ Info "git init"; git init | Out-Null }
git add -A
if(git status --porcelain){ git commit -m "Initial commit" | Out-Null } else { Info "No changes to commit" }
git branch -M main | Out-Null

# Remote
$remote = "https://github.com/$GitHubUser/$RepoName.git"
try { $cur = git remote get-url origin 2>$null } catch { $cur = $null }
if($cur){ Info "Updating remote to $remote"; git remote set-url origin $remote | Out-Null } else { Info "Adding remote $remote"; git remote add origin $remote | Out-Null }

# Push
Info "Pushing to origin main..."
git push -u origin main
Ok "Done. Repo: https://github.com/$GitHubUser/$RepoName"
