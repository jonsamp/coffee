#!/bin/bash

# Navigate to hooks folder
cd .git/hooks/

# Create pre-push file
touch pre-push

# Push the script to the file
cat > pre-push << END_TEXT
#!/bin/bash

protected_branch='master'
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ $protected_branch = $current_branch ]
then
    read -p "You're about to push master, is that what you intended? [y|n] " -n 1 -r < /dev/tty
    echo
    if echo $REPLY | grep -E '^[Yy]$' > /dev/null
    then
        exit 0 # push will execute
    fi
    exit 1 # push will not execute
else
    exit 0 # push will execute
fi
END_TEXT

# Make sure permissions are set to run pre-push
chmod 751 pre-push
