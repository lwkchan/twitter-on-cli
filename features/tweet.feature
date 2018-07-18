Feature: Run tweep
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
