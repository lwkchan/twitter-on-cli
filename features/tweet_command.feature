Feature: Run tweep t
  @tweet
  Scenario: Run command and accept when prompted if sure
    When I run `tweep t "this is just a test"` interactively
    And I type "Y"
    Then the output should contain:
    """
    Are you sure you want to Tweet:  this is just a test?
    """
    And the output should contain:
    """
    created_at:
    """
    And the output should contain:
    """
    text: 'this is just a test',
    """
  @notweet
  Scenario: Run command and abort when prompted if sure
    When I run `tweep t "hello world"` interactively
    And I type "n"
    Then the output should contain:
    """
    Are you sure you want to Tweet:  hello world?
    """
    And the output should contain:
    """
    Aborted
    """

  @notweet
  Scenario: Run command and abort if not correctly formatted tweet
    When I run `tweep t just keep tweeting` interactively
    Then the output should contain:
    """
    Incorrectly formatted tweet. Please provide a string in quotation marks if you are typing multiple words ('')
    """

  @notweet
  Scenario: Run command and abort if left blank
    When I run `tweep t` interactively
    Then the output should contain:
    """
    Can't tweet blank entry. Please provide a string in quotation marks if you are typing multiple words ('')
    """
